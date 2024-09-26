import {PicGo} from 'picgo';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PLUGIN_NAME = 'avif';

/**
 * @description: 改变文件路径后缀名
 * @return {string}
 * @param {string} filepath
 * @param {string} outExt
 */
const changeExt = (filepath: string, outExt: string) => {
  const fp = path.normalize(filepath);
  const pathObj = path.parse(fp);
  pathObj.ext = outExt;
  delete pathObj.base;
  return path.format(pathObj);
};

const beforeTransformPlugins = {
  async handle(ctx: PicGo) {
    const [tempPath] = ctx.input;
    if (path.extname(tempPath).toLowerCase() === '.avif') {
      return ctx.input;
    }
    const output = changeExt(tempPath, '.avif');
    try {
      await sharp(tempPath)
        .toFormat('avif')
        .toFile(output);
      ctx.input = [output];
      return ctx;
    } catch (error) {
      ctx.log.error(error);
      ctx.emit('notification', {
        title: '转换为AVIF错误',
        body: error.toString()
      });
    }
  }
};

const afterUploadPlugins = {
  handle(ctx: PicGo) {
    ctx.input.forEach(p => {
      fs.unlinkSync(p);
    });
  }
};

export = (ctx: PicGo) => {
  const register = () => {
    ctx.helper.beforeTransformPlugins.register(PLUGIN_NAME, beforeTransformPlugins);
    ctx.helper.afterUploadPlugins.register(PLUGIN_NAME, afterUploadPlugins);
  };
  return {
    register
  };
};

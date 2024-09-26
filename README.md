
本插件支持从本地文件路径或 URL 读取图片，在上传图片前，压缩图片并将其**转换为 avif 格式**，保证图像质量的同时，**大幅减少图片体积**。
本插件同时支持PicGO CLI和GUI两种方式。

## Install安装
### CLI模式
```bash
picgo add avif
```
使用方法
```bash
picgo use plugins
```

### PicGo GUI
直接在软件内的"插件设置"中搜索`avif`并安装即可。

## 关于AVIF
AVIF 是一种现代的图像格式，它结合了 AV1 视频编码技术，提供了比 JPEG, PNG, WebP 更高的压缩率。AVIF 支持有损和无损压缩，并且具有更好的颜色深度和透明度支持。
与Webp相比，AVIF的两个显著特点：
- 压缩率更高
- 编码速度慢

到本项目创建时（2024年9月），AVIF的兼容性虽不如Webp，但也在逐步提升，在[caniuse](https://caniuse.com/avif)上可以看到，只有IE浏览器不支持AVIF。
**AVIF非常适合在网页分发场景上使用，能大幅减少存储和传输成本，降低CDN费用的同时，提升加载速度**。
作为一种优质的图片格式，AVIF 正在逐渐取代其他图片格式，成为主流。Netflix, 京东, Bilibili 等公司已经开始使用 AVIF 格式。
下面的表格展示了不同图片格式在相同分辨率、色深、DPI下体积及视觉效果的对比：

| 图片格式 | 图片大小 | 图片文件 |
| -------- | -------- | -------- | 
| JPG     | 1,623KB | ![](images/pexels-dilara-yilmaz-988605972-27008474.jpg) | 
| AVIF     | 431KB |![](images/pexels-dilara-yilmaz-988605972-27008474.avif)| 
| PNG       | 6,193KB |  ![37](https://github.com/user-attachments/assets/ad1c41c8-2dc3-452d-abd4-ae0f0e824576)|
| AVIF     | 80KB |![](images/37.avif)| 

为了让这种优质的图片格式能够更广泛地被使用，本项目创建了可用于 PicGo 的 AVIF 插件。

## 开源贡献
欢迎贡献代码和提出改进建议。
   
## 鸣谢
本项目感谢以下开源库和工具：
- [sharp](https://github.com/lovell/sharp)

## 许可证
本项目采用 MIT 许可证。

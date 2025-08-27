![FengAmongUsServerFrontEndPage](https://socialify.git.ci/QingFengTechnology/FengAmongUsServerFrontEndPage/image?custom_language=HTML&description=1&font=KoHo&language=1&logo=https%3A%2F%2Fraw.githubusercontent.com%2FQingFengTechnology%2FFengAmongUsServerFrontEndPage%2Frefs%2Fheads%2Fmain%2FAsset%2FImage%2FBootstrap.svg&name=1&pattern=Solid&theme=Light)

一个简单的展示性网页，用于[清风的Nmpostor服务器](https://docs.qingfengawa.top)。

## 使用

将`index.html`的内容更改为你的服务器信息后，直接上传到服务器上即可，无需安装额外内容。\
对于自动识别的区域显示功能，如果你想要接入，更改`HostnameDetection.js`的`regionMapping`即可：
```js
const regionMapping = {
    '你的服务器对外访问域名/IP(不带http(s)://协议头)': '你的服务器区域名称'
};
```
如果你只有一个服务器且不想这么麻烦，可以直接把HTML文件的`<span id="Region"></span>`移除，改成固定文本即可。

## 许可

此项目使用AGPL-3.0许可证开源，确保你遵守此许可证。

## 参考

- [Bootstrap](https://getbootstrap.com)
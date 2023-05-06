## 插件系统

> 预计包括拓展，主题，编辑器模块，小组件四点。

之前 vue 版本的是在根目录（或者项目根目录）创建 plugin 目录，然后`npm init -y`创建`package.json`管理，当前版本预计也是通过这样的途径管理 plugin。

如果开发插件可以上传至 npm，然后通过 npm/pnpm 安装插件。

在插件中必须导出一个 install 方法，作为安装方法，该方法的参数传入 aurora 的插件信息，包括[icon](https://iconpark.oceanengine.com/official)、[store](https://zustand-demo.pmnd.rs/)等等内容。

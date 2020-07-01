# km-vueutils

> vue 常用工具合集,记录项目中经常用到的小工具，方便快捷~

今日份外努力，明日格外妖娆

## 使用方法

### 安装依赖

```bash
cnpm i km-vue-utils
```

- 方式一：全局引用

在 main.js 文件 或者想要引入的文件导入

```js
import utils from "km-vue-utils";
Vue.use(utils);
```

- 方式二：局部使用

在单个.vue 文件中引用全部或者单个组件

```js
import utils from "km-vue-utils";
Vue.use(utils.ReturnTop); //示例引用单个组件
```

## 包含组件

### 返回顶部

```html
<!-- 直接在所需文件引用 -->
<tool-return-top :config="config" :imgSrc="imgSrc"></tool-return-top>
```

- config 配置

| 名称   | 描述 | 默认值 |
| ------ | ---- | ------ |
| width  | 宽度 | '40px' |
| heigth | 高度 | '40px' |

- imgSrc 返回顶部的图片

### 暂无数据

```html
<!-- 直接在所需文件引用 -->
<tool-no-message tips='暂无数据' icon='vue-icon iconzanwushuju'></tool-no-message>
```

- tips 描述

- icon 采用iconfont字体库，显示字体图标

未完待续...😜

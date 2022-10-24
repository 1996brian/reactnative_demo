# 项目

# 1、构建项目

```jsx
npx react-native init AwesomeProject
```

# 2、安装`react-navigation`

```jsx
yarn add @react-navigation/native
yarn add react-native-screens react-native-safe-area-context
yarn add @react-navigation/bottom-tabs
yarn add @react-navigation/native-stack
```

`react-native-screens`包需要一个额外的配置步骤才能在 Android 设备上正常工作。编辑`MainActivity.java`位于`android/app/src/main/java/<your package name>/MainActivity.java`.

将以下代码添加到`MainActivity`类的主体中： 

```jsx
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
```

并确保在此文件顶部添加导入语句：

```jsx

import android.os.Bundle;
```

# 3、安装`react-native-vector-icons`

```jsx
yarn add react-native-vector-icons
```

**Android 无法正常显示图标,在 android/app/build.gradle 下加入**

```jsx
project.ext.vectoricons = [
    iconFontNames: [ 'FontAwesome.ttf'] // Name of the font files you want to copy
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
//或者直接引入全部
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

# 4、安装`react-redux`

```jsx
npm install @reduxjs/toolkit react-redux
```

创建使用步骤：

[https://cn.react-redux.js.org/tutorials/quick-start](https://cn.react-redux.js.org/tutorials/quick-start)

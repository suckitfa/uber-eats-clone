
# uber-eats-clone 跑起来
> 基于expo来调试项目
```sh
yarn install 
yarn start
```

#### 问题
1. 图片无法展示?
```jsx
<Image />
```
> 开发过程中有些内容可能根据具体情况无法在当时完全呈现，在这里时，我们可以移动到下一个。
> we just move on... 然后我们在回头来解决这一些列问题
### 无法使用google map api ， 地址自动补全函数无法使用
```js
解决方法，使用google地图代替，
使用现有的AutoComplete组件代替，GooglePlacesAutoComplete
或者自己封装一个基于高德地图的组件 （这个有待研究, 很有意思 , 可以从 GooglePlacesAutoComplete源码入手）
```
2. Divider无法显示
s
![image-20220220110413849](./assets/notesimg/image-20220220110413849.png)

缺啥补啥, 报错明显表示是没在包里面引用到啥啥.......【克服受害者心态，多google, 直接干就好了】

```sh
yarn add react-native-safe-area-view react-native-safe-area-context
```

### 组件的抽象
关于MenuItem的抽象,这里我想抽象成FoodPrice,FoodTitle,FoodDescription ; 作者将其抽象为FoodInfo，price， title, description都是通过`props`传入的。在这里我抽象的粒度太小了

### 内容

- ReactNative
- React 
- Redux
- FireBase
- Google API （墙，认证， 比较繁琐）



```js
1. Clear watchman watches: watchman watch-del-all
 2. Delete node_modules and run yarn install
 3. Reset Metro's cache: yarn start --reset-cache
 4. Remove the cache: rm -rf /tmp/metro-*
```
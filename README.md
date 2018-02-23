移动端touch事件常用功能整合

---

参数

 * @param callback(data,obj) 自定义回调方法，返回touchend结果
 * @param isOffset 自定义参数 是否获取相对位置（默认false）
 * @param moveFn 自定义参数 是否获取touchmove移动的位置（默认false）
 * @param swipeDis 自定义参数 滑动距离（默认100）
 
 ---
 
 ### callback(data,obj)

类型：{Function | Object} callback

 #### 详细：

返回当前滑动方向与滑动对象<br>
data: string 滑动方向<br>
obj: object 滑动对象

 #### 示例：

 ```javascript
 $(".test").J_swipe({
     callback:function(data,obj){
         $(obj).html(data);
     }
 })
 ```

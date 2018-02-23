移动端touch事件常用功能整合

---

参数

 * @param callback(data,obj) 自定义回调方法，返回touchend结果
 * @param isOffset 自定义参数 是否获取相对位置（默认false）
 * @param moveFn 自定义参数 获取touchmove移动的位置（默认false）
 * @param swipeDis 自定义参数 滑动距离（默认100）
 
 ---
 
 ### callback(data,obj)

类型：{string | Function} callback

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
 
 ### isOffset

类型：{boolean}

 #### 详细：
设置是否为相对位置<br>
默认false

 #### 示例：
 ```javascript
 $(".test").J_swipe({
     isOffset:true
 })
 ```
 
  ### moveFn(data,obj)

类型：{string | Function}

 #### 详细：
返回当前滑动距离与对象<br>
data: object 滑动位移<br>
{
  x:水平方向位移
  y:垂直方向位移
  offx:当前对象左上方相对x坐标
  offy:当前对象左上方相对y坐标
}
obj: object 滑动对象

 #### 示例：
 ```javascript
 $(".test").J_swipe({
     isOffset:true,
     moveFn:function(data,obj){
         $(obj).css({left:data.offx+data.x,top:data.offy+data.y,background:"blue"});
     },
     callback:function(data,obj){
         $(obj).css({background:"red"});
     }
 })
 ```
 
  ### swipeDis

类型：{number}

 #### 详细：
设置判断是否滑动成功距离<br>
默认100

 #### 示例：
 ```javascript
 $(".test").J_swipe({
     swipeDis:50
 })
 ```

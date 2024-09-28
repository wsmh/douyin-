1. white-space 禁止文字换行

2. 注销聚焦边框事件 .con:foucs{

   ​	outline: none;

   }

3. 使用::after或before伪类与position相对位置,并设置其为透明来扩大元素的触发范围,该区域继承原来元素的hover类;此外,还可以用其来搭配z-index属性布置背景图片,从而不影响前方的内容(不覆盖主要元素的触发区域)
4. grid布局不适用justify-content而是justify-items
5. media媒体样式应该放在所有样式之后,否则可能不生效
6. 使用@keyframes name来定义一个动画,可以使用百分比来配置各部分的播放时长,通过设定animation: 动画名 持续时长 关键帧持续方式来使用该动画
7. 可以通过设定transform-origin属性来改变元素执行动画变化的重心
8. 使用var(--valueName)来定义一个css变量,并且可用js访问和修改该变量(使用element.style.setProperty(valueName,value) 来修改该变量)

9. 通过scrollbar-width与scrollbar-color: 滑块颜色 轨道背景颜色 来修改滚动条样式,

​       设置scrollbar-width的值为none可以隐藏滚动条(部分浏览器可能需要更多的途径,如-webkit)

10. 设置caret-color来改变输入光标的样式,设置其为transparent可以隐藏输入光标
11. text-decoration: 设置下划线样式
12. background系列,如image,repeat
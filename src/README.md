## react-redux
由fackbook官方出品的react插件库，用于更方便的在react项目中使用redux

### react-redux概念

1. 所有的UI组件（展示store状态的组件）都要有一个容器组件（要创建一个**containers文件夹**），它们是父子关系

2. 容器组件是真正和redux交互的组件，可以随意使用redux的api

3. UI组件中不能直接使用redux中的api

4. 容器组件通过props给UI组件传递
   （1）redux中的状态
   （2）用于操作状态的方法

5. 备注：容器组件需要创建在containers文件夹中
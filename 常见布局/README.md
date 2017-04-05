# 常见布局
## 两栏布局
#### float
侧栏在前，改变侧栏位置要修改float 和  margin
- 侧栏float
- 主栏margin-left

#### float + overflow:auto
侧栏在前, 改变侧栏位置修改float 即可
- 侧栏float
- 主栏overflow:auto

#### float + 负外边距 
侧栏主栏的顺序决定了侧栏的位置
- 侧栏和侧栏都float
- 主栏 margin-left 设为负值
- 主栏inner  margin-left 设为正值

#### absolute （最优方案）
侧栏顺序无所谓，改变侧栏位置修改 定位 和 margin
- 侧栏绝对定位
- 主栏margin-left

## 三栏布局
#### 三栏-中栏流动布局： float
- container: float + width 100%
- container-left-main: float + width 100% + margin-right 负值
- left-col: float + 固定宽度
- main-col: float + margin-left margin-right
- right-col: float + 固定宽度

#### 三栏-中栏流动布局： table-cell
- left-col: display:table-cell + 固定宽度
- main-col: display: table-cell 
- right-col: display: table-cell + 固定宽度





# xiangxin-ui

分为通用组件和业务组件

- 通用组件   
  针对 antd 组件的样式做二次封装，主要包括主题，icon和样式覆盖
- 业务组件  
  根据一般业务场景，对通用组件的封装和组合

## 发布流程
```markdown
1. npm run chromatic
2. npm run build && npm publish
```
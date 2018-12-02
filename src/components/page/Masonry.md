Render children in Masonry layout.
Remember to add `key` to each child. 

Assumes presence of Bulma CSS to control columns etc.
 
```js
const style = {backgroundColor: "lightgray", padding:"5px", margin: "1px"};
<Masonry>{_.times(5, i => <div style={style} key={i}>Child {i}</div>)}</Masonry>
```

Render a link with class "active" if Next.js router says this is the current url:
```js
<ActiveLink href="http://foo.com">Foo</ActiveLink>
```

Router is automatically passed in via Next.js's `withRouter` HOC, 
the below example passes in a fake router just to show the effect:
```js
<ActiveLink href="http://foo.com" router={{pathname:"http://foo.com"}}>Active</ActiveLink>
```

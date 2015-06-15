#Notes
##Initial
```javascript
$(document).on("pageinit","page",function(){
    //do something
});
```
##Basic Page
```javascript
<div data-role="page">
    <div data-role="header">
        <h1>I'am header</h1>
    </div>
    <div role="main" class="ui-content">
        <p>I'am main content</p>
    </div>
    <div data-role="footer">
        <h1>I'am header</h1>
    </div>
</div>
```

##Transition
```html
<a href="#index" data-transition="slide">To Index Page</a>
```
* none   
* slide   
* slideup   
* slidedown   
* pop   
* fade   
* flip   

##Page Event
* pagebeforecreate   
* pagecreate   
* pageinit   
<br>
* pagebeforeload   
* pageload   
<br>
* pagebeforeshow   
* pageshow   
* pagebeforehide   
* pagehide  

##Button
```html
<a href="#" class="ui-btn">i am button</a>
```
1. ui-corner-all
2. ui-shadow
3. ui-btn-inline
4. ui-btn-a
5. ui-btn-b

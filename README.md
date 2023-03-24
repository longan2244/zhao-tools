## Classes
## 使用实例
```js
const ztools = require('zhao-tools');
## 网络相关
// JSONP文本转JSON
ztools.z_request.jsonptojson()
## url路径相关
// 解析路径得到内容
ztools.z_url.parseUrl()
## 时间相关 
//将时间戳格式化为各种时间格式，
ztoolss.z_time.formatTimestamp()
## js相关
ztoolss.z_js.getType()
## 字符串相关
ztoolss.z_str.truncateString()//返回一个截断到指定长度的字符串，
..............replaceAll()//ES2020的replaceAll进行ES5重写
.............getAllTextBetween()//指定开始值和结束值之间的所有字符串
```
## 更多
<dl>
<dt><a href="#ztools">ztools</a></dt>
<dd><p>class工具类</p>
</dd>
</dl>
## Functions

<dl>
<dt><a href="#jsonptojson">jsonptojson(jsonpStr)</a> ⇒ <code>object</code></dt>
<dd><p>jsonp文本 转 json对象</p>
</dd>
<dt><a href="#parseUrl">parseUrl(url)</a> ⇒ <code>object</code></dt>
<dd><p>解析 URL，返回包含其参数键值对的对象，以及路径、查询参数、主机名</p>
</dd>
<dt><a href="#formatTimestamp">formatTimestamp(timestamp)</a> ⇒ <code>object</code></dt>
<dd><p>将时间戳格式化为各种时间格式，并计算出距离当前时间的时间差，并以键值对形式返回</p>
</dd>
<dt><a href="#getType">getType(variable)</a> ⇒ <code>string</code></dt>
<dd><p>判断变量的类型，并返回类型字符串</p>
</dd>
<dt><a href="#truncateString">truncateString(str, maxLength)</a> ⇒ <code>string</code></dt>
<dd><p>返回一个截断到指定长度的字符串，如果字符串长度超过指定长度，则添加省略号。</p>
</dd>
<dt><a href="#replaceAll">replaceAll(str, find, replace)</a> ⇒ <code>string</code></dt>
<dd><p>将源字符串中的所有出现的子字符串替换为指定的目标字符串。</p>
</dd>
<dt><a href="#getAllTextBetween">getAllTextBetween(text, start, end)</a> ⇒ <code>array</code></dt>
<dd><p>获取文本中指定开始值和结束值之间的所有子字符串（全局匹配）</p>
</dd>
<dt><a href="#getTagAttrValues">getTagAttrValues(html, tag, [attr], [limit])</a> ⇒ <code>array</code> | <code>object</code></dt>
<dd><p>在给定的 HTML 片段中，查找前 n 个指定标签的指定属性的值</p>
</dd>
<dt><a href="#validate">validate(optionsObject)</a> ⇒ <code>Object</code></dt>
<dd><p>验证给定的对象是否符合指定的格式要求</p>
</dd>
</dl>

<a name="ztools"></a>

## ztools
class工具类

**Kind**: global class

* [ztools](#ztools)
    * [.z_request](#ztools+z_request)
    * [.z_url](#ztools+z_url)
    * [.z_time](#ztools+z_time)
    * [.z_js](#ztools+z_js)
    * [.z_str](#ztools+z_str)
    * [.z_html](#ztools+z_html)
    * [.z_regex](#ztools+z_regex)

<a name="ztools+z_request"></a>

### ztools.z\_request
网络请求相关

**Kind**: instance property of [<code>ztools</code>](#ztools)
<a name="ztools+z_url"></a>

### ztools.z\_url
处理网址相关

**Kind**: instance property of [<code>ztools</code>](#ztools)
<a name="ztools+z_time"></a>

### ztools.z\_time
处理时间格式化相关

**Kind**: instance property of [<code>ztools</code>](#ztools)
<a name="ztools+z_js"></a>

### ztools.z\_js
js相关

**Kind**: instance property of [<code>ztools</code>](#ztools)
<a name="ztools+z_str"></a>

### ztools.z\_str
字符串相关

**Kind**: instance property of [<code>ztools</code>](#ztools)
<a name="ztools+z_html"></a>

### ztools.z\_html
html相关

**Kind**: instance property of [<code>ztools</code>](#ztools)
<a name="ztools+z_regex"></a>

### ztools.z\_regex
正则表达式相关

**Kind**: instance property of [<code>ztools</code>](#ztools)
<a name="jsonptojson"></a>

## jsonptojson(jsonpStr) ⇒ <code>object</code>
jsonp文本 转 json对象

**Kind**: global function
注意，此函数只适用于标准的 JSONP 格式，即 callbackName(jsonData) 形式的字符串。如果你需要处理其他格式的跨域请求响应，请自行修改代码。  法的 JSONP 格式，则函数会返回 null。

| Param | Type | Description |
| --- | --- | --- |
| jsonpStr | <code>string</code> | jsonp格式字符串 |

<a name="parseUrl"></a>

## parseUrl(url) ⇒ <code>object</code>
解析 URL，返回包含其参数键值对的对象，以及路径、查询参数、主机名

**Kind**: global function
**Returns**: <code>object</code> - - 包含路径、查询参数、主机名和参数键值对的对象

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | 要解析的 URL |

<a name="formatTimestamp"></a>

## formatTimestamp(timestamp) ⇒ <code>object</code>
将时间戳格式化为各种时间格式，并计算出距离当前时间的时间差，并以键值对形式返回

**Kind**: global function
**Returns**: <code>object</code> - - 包含各种时间格式和发布时间的键值对

| Param | Type | Description |
| --- | --- | --- |
| timestamp | <code>number</code> | 要格式化的时间戳（Unix 时间戳，单位为毫秒） |

<a name="getType"></a>

## getType(variable) ⇒ <code>string</code>
判断变量的类型，并返回类型字符串

**Kind**: global function
**Returns**: <code>string</code> - - 变量的类型字符串

| Param | Type | Description |
| --- | --- | --- |
| variable | <code>\*</code> | 要检查类型的变量 |

<a name="truncateString"></a>

## truncateString(str, maxLength) ⇒ <code>string</code>
返回一个截断到指定长度的字符串，如果字符串长度超过指定长度，则添加省略号。

**Kind**: global function
**Returns**: <code>string</code> - - 截断后的字符串。
**Throws**:

- <code>TypeError</code> 如果输入的参数不是字符串或数字类型，则抛出异常。


| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | 要截断的字符串。 |
| maxLength | <code>number</code> | 最大允许的字符串长度。 |

<a name="replaceAll"></a>

## replaceAll(str, find, replace) ⇒ <code>string</code>
将源字符串中的所有出现的子字符串替换为指定的目标字符串。

**Kind**: global function
**Returns**: <code>string</code> - - 一个新字符串，其中所有匹配项都被替换为目标字符串。
**Throws**:

- <code>TypeError</code> 如果任何一个参数不是字符串类型，则抛出异常。
- <code>Error</code> 如果查找字符串为空，则抛出异常。


| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | 要进行替换操作的源字符串。 |
| find | <code>string</code> | 要查找和替换的子字符串。 |
| replace | <code>string</code> | 用于替换每个匹配项的目标字符串。 |

<a name="getAllTextBetween"></a>

## getAllTextBetween(text, start, end) ⇒ <code>array</code>
获取文本中指定开始值和结束值之间的所有子字符串（全局匹配）

**Kind**: global function
**Returns**: <code>array</code> - - 匹配到的所有子字符串组成的数组，如果未找到任何匹配项，则返回空数组。

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | 要搜索的文本 |
| start | <code>string</code> | 搜索范围的开始值 |
| end | <code>string</code> | 搜索范围的结束值 |

<a name="getTagAttrValues"></a>

## getTagAttrValues(html, tag, [attr], [limit]) ⇒ <code>array</code> \| <code>object</code>
在给定的 HTML 片段中，查找前 n 个指定标签的指定属性的值

**Kind**: global function
**Returns**: <code>array</code> \| <code>object</code> - - 如果未指定属性名称，则返回包含每个匹配项的所有属性的对象。否则，返回包含匹配项的属性值组成的数组。

| Param | Type | Description |
| --- | --- | --- |
| html | <code>string</code> | 要搜索的 HTML 片段 |
| tag | <code>string</code> | 要搜索的 HTML 标签名称 |
| [attr] | <code>string</code> | 要搜索的 HTML 属性名称（可选） |
| [limit] | <code>number</code> | 要返回的值的数量（可选） |

<a name="validate"></a>

## validate(optionsObject) ⇒ <code>Object</code>
验证给定的对象是否符合指定的格式要求

**Kind**: global function
**Returns**: <code>Object</code> - 包含每个属性是否符合对应格式要求的结果的对象
**Throws**:

- <code>TypeError</code> 如果参数不是一个对象类型，则抛出一个类型错误


| Param | Type | Description |
| --- | --- | --- |
| optionsObject | <code>Object</code> | 包含需要验证的属性和值的对象 |
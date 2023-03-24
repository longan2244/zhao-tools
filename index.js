/**
 * class工具类
 */
class Ztools {
  constructor() {
  }
  /**网络请求相关
 * 
 */
  static z_request = {
    /**
     * jsonp文本 转 json对象
     * @param {string} jsonpStr  jsonp格式字符串
     * @returns {object}  callbackName：回调函数名  jsonObj：json对象
       * 这个函数的参数是一个 JSONP 格式的字符串，它将字符串转换为 JSON 对象，并返回一个包含回调函数名和 JSON 对象的对象。如果输入的字符串不是合法的 JSONP 格式，则函数会返回 null。
      *注意，此函数只适用于标准的 JSONP 格式，即 callbackName(jsonData) 形式的字符串。如果你需要处理其他格式的跨域请求响应，请自行修改代码。
     */
    jsonptojson(jsonpStr) {
      // 匹配 JSONP 格式的正则表达式
      const pattern = /^(\w+)\((.*)\)$/;
      const matchResult = jsonpStr.match(pattern);
      if (matchResult) {
        const [, callbackName, jsonStr] = matchResult;
        try {
          const jsonObj = JSON.parse(jsonStr);
          return { callbackName, jsonObj };
        } catch (err) {
          console.error('JSON 解析错误', err);
          return null;
        }
      } else {
        console.error('无效的 JSONP 格式');
        return null;
      }
    }
  };
  /**处理网址相关
   * 
   */
  static z_url = {
    /**
 * 解析 URL，返回包含其参数键值对的对象，以及路径、查询参数、主机名
 *
 * @param {string} url - 要解析的 URL
 * @returns {object} - 包含路径、查询参数、主机名和参数键值对的对象
 */
    parseUrl(url) {
      const parts = url.split('?');
      const pathname = parts[0];
      const search = parts.length === 2 ? parts[1] : '';
      const params = {};
      if (search) {
        const keyValuePairs = search.split('&');
        for (let i = 0; i < keyValuePairs.length; i++) {
          const [key, value] = keyValuePairs[i].split('=');
          params[key] = decodeURIComponent(value);
        }
      }
      const hostMatch = url.match(/^(?:https?:\/\/)?([^\/]+)/i);
      const host = hostMatch ? hostMatch[1] : '';
      return {
        pathname: pathname, //URL 的路径部分
        search: search, //URL 的路径部分
        host: host,//URL 的主机名部分。
        params: params, //params
      };
    }
  }
  /**处理时间格式化相关
   * 
   */
  static z_time = {
    /**
 * 将时间戳格式化为各种时间格式，并计算出距离当前时间的时间差，并以键值对形式返回
 *
 * @param {number} timestamp - 要格式化的时间戳（Unix 时间戳，单位为毫秒）
 * @returns {object} - 包含各种时间格式和发布时间的键值对
 */
    formatTimestamp(timestamp) {
      const date = new Date(timestamp);
      const now = new Date();
      const diffMs = now - date;
      const diffSeconds = diffMs / 1000;
      const diffMinutes = diffSeconds / 60;
      const diffHours = diffMinutes / 60;
      const diffDays = diffHours / 24;
      return {
        published: getPublishedTime(diffSeconds, diffMinutes, diffHours, diffDays),
        year: date.getFullYear(),
        month: padZero(date.getMonth() + 1),
        day: padZero(date.getDate()),
        hours: padZero(date.getHours()),
        minutes: padZero(date.getMinutes()),
        seconds: padZero(date.getSeconds()),
        iso8601: date.toISOString(),
        localeString: date.toLocaleString(),
        localeDateString: date.toLocaleDateString(),
        localeTimeString: date.toLocaleTimeString()
        /**
         * timestamp：要格式化的时间戳（Unix 时间戳，单位为毫秒）
该函数返回一个对象，其中包含以下属性：

year：年份（例如 "2023"）
month：月份，使用两位数字（例如 "01" 到 "12"）
day：日期，使用两位数字（例如 "01" 到 "31"）
hours：小时数，使用两位数字（例如 "00" 到 "23"）
minutes：分钟数，使用两位数字（例如 "00" 到 "59"）
seconds：秒数，使用两位数字（例如 "00" 到 "59"）
iso8601：符合 ISO 8601 格式的日期时间字符串（例如 "2023-03-14T00:00:00.000Z"）
localeString：本地化日期时间字符串（例如 "3/13/2023, 4:00:00 PM"）
localeDateString：本地化日期字符串（例如 "3/13/2023"）
localeTimeString：本地化时间字符串（例如 "4:00:00 PM"）
published：表示时间戳已发布多长时间的字符串（例如 "5分钟前" 或 "2天前"）
         */
      };
    }
  }
  /** js相关
   * 
   */
  static z_js = {


/**
 * 统计对象数组中指定属性出现的次数。
 *
 * @param {Object[]} arr - 要处理的对象数组。
 *   数组中的每个元素应该包含一个具有指定属性的对象。
 * @param {string} propName - 要统计的属性名。
 *   该属性必须在每个数组元素的对象中存在。
 * @returns {Object[]} 包含每个不同属性值及其出现次数的对象数组。
 *   每个对象都具有两个属性：指定属性的值和出现次数。
 */
 countByProp(arr, propName) {
  // 使用 reduce() 方法遍历数组并累加计数。
  const result = arr.reduce((acc, curr) => {
    // 检查当前对象的指定属性是否已经在计数器中出现过。
    if (typeof acc[curr[propName]] == 'undefined') {
      // 如果没有出现过，则将计数器中添加一个新的属性，并将其值设置为 1。
      acc[curr[propName]] = 1;
    } else {
      // 如果出现过，则将计数器中对应属性的值加 1。
      acc[curr[propName]]++;
    }
    // 返回更新后的计数器。
    return acc;
  }, {});

  // 使用 Object.entries() 和 map() 方法将计数器转换为对象数组。
  // 每个对象都具有指定属性的值和出现次数两个属性。
  return Object.entries(result).map(([name, count]) => ({ [propName]: name, count }));
},

    /**
 * 判断变量的类型，并返回类型字符串
 *
 * @param {*} variable - 要检查类型的变量
 * @returns {string} - 变量的类型字符串
 */
    getType(variable) {
      const type = Object.prototype.toString.call(variable);
      const types = {
        '[object String]': 'string',
        '[object Number]': 'number',
        '[object Boolean]': 'boolean',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Array]': 'array',
        '[object Object]': 'object',
        '[object Date]': 'date',
        '[object RegExp]': 'regexp',
        '[object Error]': 'error',
        '[object Function]': 'function',
      };
      return types[type] || 'unknown';
    }
  }
  /** 字符串相关
   * 
   */
  static z_str = {
    /**
     * 返回一个截断到指定长度的字符串，如果字符串长度超过指定长度，则添加省略号。
     *
     * @param {string} str - 要截断的字符串。
     * @param {number} maxLength - 最大允许的字符串长度。
     * @returns {string} - 截断后的字符串。
     * @throws {TypeError} 如果输入的参数不是字符串或数字类型，则抛出异常。
     */
    truncateString(str, maxLength) {
      if (typeof str !== 'string' || typeof maxLength !== 'number') {
        throw new TypeError('truncateString(): 参数必须是字符串和数字类型');
      }

      if (str.length <= maxLength) {
        return str;
      }

      if (maxLength < 3) {
        throw new Error('truncateString(): 最大长度必须至少为 3');
      }

      return str.substr(0, maxLength - 3) + '...';
    },
    /**
 * 将源字符串中的所有出现的子字符串替换为指定的目标字符串。
 *
 * @param {string} str - 要进行替换操作的源字符串。
 * @param {string} find - 要查找和替换的子字符串。
 * @param {string} replace - 用于替换每个匹配项的目标字符串。
 * @returns {string} - 一个新字符串，其中所有匹配项都被替换为目标字符串。
 * @throws {TypeError} 如果任何一个参数不是字符串类型，则抛出异常。
 * @throws {Error} 如果查找字符串为空，则抛出异常。
 */
    replaceAll(str, find, replace) {
      // 检查参数是否都是字符串类型。
      if (typeof str !== 'string' || typeof find !== 'string' || typeof replace !== 'string') {
        throw new TypeError('replaceAll(): 参数必须都是字符串类型');
      }

      // 检查查找字符串是否为空。
      if (find === '') {
        throw new Error('replaceAll(): 查找字符串不能为空');
      }

      // 创建一个正则表达式模式，并使用它来替换所有匹配项。
      const regex = new RegExp(find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      return str.replace(regex, replace);
    },
    /**
 * 获取文本中指定开始值和结束值之间的所有子字符串（全局匹配）
 *
 * @param {string} text - 要搜索的文本
 * @param {string} start - 搜索范围的开始值
 * @param {string} end - 搜索范围的结束值
 * @returns {array} - 匹配到的所有子字符串组成的数组，如果未找到任何匹配项，则返回空数组。
 */
    getAllTextBetween(text, start, end) {
      const regex = new RegExp(`${start}(.*?)${end}`, 'gs');
      const matches = text.match(regex);

      if (!matches) return [];

      return matches.map(match => match.slice(start.length, -end.length));
    }
  }
  /** html相关
   * 
   */
  static z_html = {
    /**
   * 在给定的 HTML 片段中，查找前 n 个指定标签的指定属性的值
   *
   * @param {string} html - 要搜索的 HTML 片段
   * @param {string} tag - 要搜索的 HTML 标签名称
   * @param {string} [attr] - 要搜索的 HTML 属性名称（可选）
   * @param {number} [limit] - 要返回的值的数量（可选）
   * @returns {array|object} - 如果未指定属性名称，则返回包含每个匹配项的所有属性的对象。否则，返回包含匹配项的属性值组成的数组。
   */
    getTagAttrValues(html, tag, attr = undefined, limit = undefined) {
      const regex = new RegExp(`<${tag}[^>]*?(?:\\s${attr}(?:=(?:"([^"]*)"|'([^']*)'|([^\\s>]+)))?)[^>]*>`, 'gi');
      const matches = html.match(regex);
      if (!matches) return attr ? [] : {};
      if (!attr) {
        const results = {};
        matches.forEach(match => {
          const attrs = match.match(/(?:\s+(\S+)(?:(?:=(?:"([^"]*)"|'([^']*)'|([^\\s>]+)))?)?)+/g);
          const tagAttrs = {};
          attrs.forEach(attr => {
            const [_, name, doubleQuotedValue, singleQuotedValue, unquotedValue] = attr.match(/(\S+)(?:(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s>]+)))?)?/);
            tagAttrs[name] = doubleQuotedValue || singleQuotedValue || unquotedValue || '';
          });
          const id = tagAttrs.id || tagAttrs.name || tagAttrs.class;
          if (id) {
            results[id] = tagAttrs;
          }
        });
        return results;
      }
      const values = matches.map(match => {
        const [, doubleQuotedValue, singleQuotedValue, unquotedValue] = match.match(new RegExp(`\\s${attr}(?:=(?:"([^"]*)"|'([^']*)'|([^\\s>]+)))?`));
        return doubleQuotedValue || singleQuotedValue || unquotedValue || '';
      }).filter(value => value !== '');

      return limit ? values.slice(0, limit) : values;
    }
  }
  /**正则表达式相关
   * 
   */
  static z_regex = {
    /**
     * 验证给定的对象是否符合指定的格式要求
     *
     * @param {Object} optionsObject 包含需要验证的属性和值的对象
     * @returns {Object} 包含每个属性是否符合对应格式要求的结果的对象
     * @throws {TypeError} 如果参数不是一个对象类型，则抛出一个类型错误
     */
    validate(optionsObject) {
      // 检查参数是否为对象类型
      if (typeof optionsObject !== 'object' || Array.isArray(optionsObject)) {
        throw new TypeError('参数必须为对象类型');
      }

      // 定义各种验证类型及其对应的正则表达式和结果属性名
      const validators = [
        { regex: /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|(30|31))\d{3}[0-9Xx]$/, propName: 'idCard' },
        { regex: /^(13[0-9]|14[5-9]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[89])\d{8}$/, propName: 'phone' },
        { regex: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-]+)+$/, propName: 'email' },
        { regex: /^\d{16,19}$/, propName: 'bankCard' },
        { regex: /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/, propName: 'carNumber' }
      ];

      try {
        // 使用 Object.entries() 方法将选项对象转换成一个键值对数组，并使用 reduce() 方法将其转换成最终的验证状态对象
        return Object.entries(optionsObject).reduce((result, [key, value]) => {
          // 根据键名查找相应的验证器
          const validator = validators.find(v => v.propName === key);

          // 如果存在相应的验证器，则使用它进行验证并将验证结果保存在当前状态对象中
          if (validator) {
            result[validator.propName] = validator.regex.test(value);
          }

          return result;
        }, {});
      } catch (error) {
        // 处理任何可能发生的异常并重新抛出
        throw new Error(`验证过程中发生了异常：${error.message}`);
      }
    }
  }
}
// 工具函数：在数字前面加上零，以确保它们至少包含两位数字。
function padZero(num) {
  return num < 10 ? '0' + num : num;
}

// 工具函数：将时间差转换为适合显示的文本(单位：秒、分钟、小时、天)
function getPublishedTime(diffSeconds, diffMinutes, diffHours, diffDays) {
  if (diffDays >= 1) {
    return Math.floor(diffDays) + '天前';
  } else if (diffHours >= 1) {
    return Math.floor(diffHours) + '小时前';
  } else if (diffMinutes >= 1) {
    return Math.floor(diffMinutes) + '分钟前';
  } else {
    return Math.floor(diffSeconds) + '秒前';
  }
}
module.exports = Ztools;


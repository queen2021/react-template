module.exports = {
  //   ESLint 解析器将代码转换为 ESLint 可以评估的抽象语法树（AST, abstract syntax tree）。
  //   默认情况下，ESLint 使用内置的与标准 JavaScript运行时和版本兼容的 Espree 解析器。
  //   自定义解析器让 ESLint 可以解析非标准的 JavaScript 语法。
  //   通常自定义解析器会被包含在可共享配置或插件中，这样你就不需要直接使用它们了。
  //   比如用于让 ESLint 可以解析 TypeScript 代码的
  //  @typescript-eslint/parser 解析器就被包含在 typescript-eslint 项目中。
  parser: '@typescript-eslint/parser',
  //   扩展后，就可以继承另一个配置文件的所有特征（包括规则、插件和语言选项）并修改所有选项。
  // 它有三种配置，定义如下：
  // 基础配置：被扩展的配置。
  // 派生配置：扩展基础配置的配置。
  // 结果的实际配置：将派生配置合并到基础配置的结果
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'], // 这一行将启用所有标记为“推荐”的规则。
  plugins: ['@typescript-eslint', 'prettier'], // 强制执行框架规定的最佳实践 使用 typescript-eslint、prettier 框架的最佳实践
  rules: {
    // 在这里添加你的 ESLint 规则
    'no-undef': 'off',
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    camelcase: [2, { properties: 'never' }], // 推荐使用骆驼拼写法命名约定
    semi: [2, 'never'],
    'block-spacing': 2, // 强制在代码块中开括号前和闭括号后有空格
    'key-spacing': 2, // key-value间的冒号前后空格
    'computed-property-spacing': 2, // 强制在计算的属性的方括号中使用一致的空格
    'object-curly-spacing': [2, 'always'], // 强制在大括号中使用一致的空格
    'keyword-spacing': [1, { before: true, after: true }], // 关键词前有空格
    'space-before-function-paren': 2, // 强制在 function 的左括号之前使用一致的空格
    'space-before-blocks': 2, // 强制在块之前使用一致的空格
    'space-in-parens': 2, // 强制在圆括号内使用一致的空格
    'space-infix-ops': 2, // 要求操作符周围有空格
    'space-unary-ops': [2, { words: true, nonwords: false }], // 一元字运营商后有空格、一元运算符无空格
    'switch-colon-spacing': 2, // 强制在 switch 的冒号左右有空格
    'template-tag-spacing': 2, // 要求或禁止在模板标记和它们的字面量之间有空格 ？？？
    'comma-spacing': [2, { before: false, after: true }], // 强制在逗号前后使用一致的空格
    'comma-style': 2, // 强制使用一致的逗号风格
    'rest-spread-spacing': 2, // 强制剩余和扩展运算符及其表达式之间有空格（默认不使用）
    'template-curly-spacing': 2, // 要求模板字符串中的嵌入表达式周围空格的使用（默认不使用）
    'no-trailing-spaces': 2, // 禁用行尾空格
    'spaced-comment': 2, // 强制在注释中 // 或 /* 使用一致的空格

    'brace-style': [2, '1tbs'], // 强制在代码块中使用一致的大括号风格

    'linebreak-style': 0, // 强制使用一致的换行风格 ？？？
    'lines-around-comment': [1, { beforeBlockComment: true }], // 要求在注释前有空行
    'lines-between-class-members': 2, // 要求或禁止类成员之间出现空行 ？？？？

    'new-cap': [0, { newIsCap: true, capIsNew: true }], // 要求构造函数首字母大写 且必须要用new 调用构造函数 ？？？？？
    'new-parens': 2, // 强制或禁止调用无参构造函数时有圆括号

    'func-call-spacing': 2, // 禁止在函数标识符和其调用之间有空格
    'func-names': [1, 'as-needed'], // 要求使用命名的?function?表达式 ？？？
    'func-style': 1, // 强制一致地使用?function?声明或表达式
    'function-paren-newline': [1, 'consistent'], // 强制在函数括号内使用一致的换行
    'max-lines-per-function': [2, 150], // 强制函数最大代码行数
    'max-statements': [2, 150], // 强制函数块最多允许的的语句数量
    'max-nested-callbacks': [1, 3], // 强制回调函数最大嵌套深度
    'max-params': [2, 4], // 强制函数定义中最多允许的参数数量
    'no-console': 0, // 允许 console
    'max-lines': [1, 2000], // 单文件最大行数 ？？？？？
    'max-len': [1, 140], // 强制一行的最大长度 ？？？？？

    'max-statements-per-line': 2, // 强制每一行中所允许的最大语句数量 ????

    'no-multi-assign': 2, // 禁止连续赋值
    'no-multi-str': 2, // 不使用多行字符串\/

    'newline-per-chained-call': [2, { ignoreChainWithDepth: 5 }], // 一行最多只能有四个链式调用

    'no-unused-vars': 1, // 禁止定义用不到的变量 ？？？？？？？
    'no-unused-expressions': 1, // ？？？？？？？
    'no-dupe-keys': 2, // 禁止对象字面量中出现重复的 key
    'no-duplicate-case': 2, // 禁止出现重复的 case 标签
    'no-fallthrough': 2, // 禁止 case 语句落空
    'default-case': 2, // 要求 switch 语句中有 default 分支
    'no-else-return': 2, // 禁止 if 语句中 return 语句之后有 else 块

    'no-unneeded-ternary': 1, // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-plusplus': 0, // 允许一元操作符 ++ 和 --

    'no-new-object': 2, // 禁用 Object 的构造函数
    'no-array-constructor': 2, // 禁用 Array 构造函数
    'no-new-func': 2, // 禁止对 Function 对象使用 new 操作符
    'no-new-wrappers': 2, // 禁止对 String，Number 和 Boolean 使用 new 操作符

    'wrap-iife': [2, 'inside'], // 要求 IIFE 使用括号括起来

    'no-loop-func': 2, // 禁止在循环语句中出现包含不安全引用的函数声明

    'no-param-reassign': [
      // 允许部分函数入参可以被修改
      1,
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state',
          'err',
          'e',
          'ctx',
          'req',
          'request',
          '$scope',
          'item'
        ]
      }
    ],

    'object-shorthand': 2, // 要求或禁止对象字面量中方法和属性使用简写语法
    'quote-props': [2, 'as-needed'], // 要求对象字面量属性名称除非必要否则不用引号括起来

    'no-var': 2, // 要求使用?let?或?const?而不是?var
    'prefer-arrow-callback': 1, // 要求回调函数使用箭头函数
    'prefer-object-spread': 2, // 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展。
    'arrow-spacing': 2, // 强制箭头函数的箭头前后使用一致的空格
    'prefer-const': 2, // 要求使用?const?声明那些声明后不再被修改的变量
    'prefer-destructuring': 2, // 优先使用数组和对象解构
    'prefer-rest-params': 2, // 要求使用剩余参数而不是?arguments
    'prefer-spread': 2, // 要求使用扩展运算符而非? .apply()
    'prefer-template': 2, // 要求使用模板字面量而非字符串连接

    'arrow-body-style': [2, 'as-needed'], // 箭头函数按需体使用大括号
    'arrow-parens': [2, 'as-needed'], // 箭头函数的参数按需使用圆括号

    'no-useless-constructor': 2, // 禁用不必要的构造函数 ????
    'no-dupe-class-members': 2, // 禁止类成员中出现重复的名称
    'no-duplicate-imports': 2, // 禁止重复模块导入
    'import/extensions': 0,
    'no-lonely-if': 0, // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-with': 2, // 禁用 with 语句
    'no-eval': 2, // 禁用 eval()

    'no-empty-function': 1,
    'consistent-return': 0,
    'no-nested-ternary': 1,
    'no-underscore-dangle': [1, { allow: ['foo_', '_bar'] }]
  }
}

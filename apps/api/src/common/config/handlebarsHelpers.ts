import Handlebars from 'handlebars';

export const helpers = {
  link: function (text: string, url: string) {
    url = Handlebars.escapeExpression(url);
    text = Handlebars.escapeExpression(text);

    return new Handlebars.SafeString(
      `<a href="${url}" title="${url}">${text}</a>`,
    );
  },
  email: function (text: string, email: string) {
    text = Handlebars.escapeExpression(text);
    email = Handlebars.escapeExpression(email);

    return new Handlebars.SafeString(
      `<a href="mailto:${email}" title="${email}">${text}</a>`,
    );
  },
  renderCellData: function (value: string, key: string, resourceName: string) {
    key = Handlebars.escapeExpression(key);
    value = Handlebars.escapeExpression(value);
    resourceName = Handlebars.escapeExpression(resourceName);
    switch (key) {
      case 'id':
        value = `<a href="/admin/${resourceName}/${value}" title="${value}">${value}</a>`;
        break;
      case 'email':
        value = `<a href="mailto:${value}" title="${value}">${value}</a>`;
        break;
      default:
        value = value.toString();
        break;
    }
    return new Handlebars.SafeString(value);
  },
  year: function () {
    return new Date().getFullYear();
  },
  ifCond: function (v1, operator, v2, options) {
    switch (operator) {
      case '==':
        return v1 == v2 ? options.fn(this) : options.inverse(this);
      case '===':
        return v1 === v2 ? options.fn(this) : options.inverse(this);
      case '!=':
        return v1 != v2 ? options.fn(this) : options.inverse(this);
      case '!==':
        return v1 !== v2 ? options.fn(this) : options.inverse(this);
      case '<':
        return v1 < v2 ? options.fn(this) : options.inverse(this);
      case '<=':
        return v1 <= v2 ? options.fn(this) : options.inverse(this);
      case '>':
        return v1 > v2 ? options.fn(this) : options.inverse(this);
      case '>=':
        return v1 >= v2 ? options.fn(this) : options.inverse(this);
      case '&&':
        return v1 && v2 ? options.fn(this) : options.inverse(this);
      case '||':
        return v1 || v2 ? options.fn(this) : options.inverse(this);
      default:
        return options.inverse(this);
    }
  },
};

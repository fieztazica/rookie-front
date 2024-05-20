import Handlebars from 'handlebars';
import { convertCamelCaseToTitleCase } from '../utils';

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
  titleCase: function (text: string) {
    text = Handlebars.escapeExpression(text);
    return new Handlebars.SafeString(convertCamelCaseToTitleCase(text));
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
  getEntityActionUrl(entityId: string, resourceName: string, action: string) {
    entityId = Handlebars.escapeExpression(entityId);
    resourceName = Handlebars.escapeExpression(resourceName);
    action = Handlebars.escapeExpression(action);

    return new Handlebars.SafeString(
      `/admin/${resourceName}/${entityId}/${action}`,
    );
  },
  getInputElementByType: function (
    key: string,
    type: string,
    className: string,
  ) {
    key = Handlebars.escapeExpression(key);
    type = Handlebars.escapeExpression(type);
    className = Handlebars.escapeExpression(className);

    let htmlElement = 'input';
    let htmlElementType = type;

    switch (type) {
      case 'string':
        if (key == 'description') {
          htmlElement = 'textarea';
        }
        if (key == 'email') {
          htmlElementType = 'email';
        }
        break;
      default:
        break;
    }
    return new Handlebars.SafeString(
      `<${htmlElement} class="${className}" type="${htmlElementType}" name="${key}" id="${key}" data-key="${key}"></${htmlElement}>`,
    );
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

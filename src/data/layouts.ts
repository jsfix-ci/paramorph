
import requireDirectory, { Module } from './requireDirectory';
import { Layout } from '../models';

const Context = require('./requireContext');

const layouts = requireDirectory(Context.LAYOUTS)
  .map((module : Module) => {
    const name = module.name.replace(/^\.\//, '').replace(/\.(t|j)sx?$/, '');
    const component = module.exports.default;

    if (typeof component !== 'function') {
      throw new Error(`default export of layout ${
        name} is of wrong type; expected 'function'; got '${typeof component}'`);
    }
    return new Layout(name, component);
  });

export default layouts;


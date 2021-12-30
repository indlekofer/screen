import init, { register, matchPath, findById, getUrlPrefix } from '../src/index';

import { expect } from 'chai';

const DUMMYSCREEN_ID = 'DUMMYSCREEN_ID';
const dummyScreen = function () {
  this.getId = function () {
    return DUMMYSCREEN_ID;
  };
  this.match = function (path) {
    if (path[0] == 'test') {
      return [DUMMYSCREEN_ID, null];
    } else {
      return [null, null];
    }
  };
};

describe('index', () => {

  beforeEach(() => {
    init();
    register(dummyScreen);
  });

  afterEach(() => {
  });

  it('matchPath', () => {
    expect(matchPath('/test')).to.deep.equal([DUMMYSCREEN_ID, null]);
    expect(matchPath('/false')).to.deep.equal([null, null]);
    expect(matchPath('/')).to.deep.equal([null, null]);
  });
  it('getUrlPrefix', () => {
    init('/pre');
    expect(getUrlPrefix()).to.deep.equal('/pre');
  });

  it('matchPath with prefix', () => {
    init('/pre');
    expect(matchPath('/pre/test')).to.deep.equal([DUMMYSCREEN_ID, null]);
    expect(matchPath('/test')).to.deep.equal([null, null]);
  });

  it('findById', () => {
    expect(findById(DUMMYSCREEN_ID).getId()).to.equal(DUMMYSCREEN_ID);
    expect(findById(null)).to.equal(null);
    expect(findById('notExisitingId')).to.equal(null);
  });

});

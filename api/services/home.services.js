class HomeServices {
  constructor() {}

  create() {}

  async find() {
    return [{
      total: 2,
      results: [
        {
          id: 1,
          name: 'Allan',
        },
        {
          id: 2,
          name: 'Sebastian',
        },
      ],
    }];
  }

  findOne(id) {}

  delete(id) {}
}

module.exports = HomeServices;

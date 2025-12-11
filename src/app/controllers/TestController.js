class TestController {
  // [GET] /Test
  index(req, res) {
    res.render('test');
  }

  // [GET] /Test/hocnodejs
  show(req, res) {
    res.send('testhocnodejs');
  }
}

module.exports = new TestController();

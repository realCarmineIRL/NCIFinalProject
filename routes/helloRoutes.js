module.exports = (app) => {

  app.get(`/api/hello`, async (req, res) => {
    let item = await [{
        id: 1,
        info: "This is first test of Express + React"
    }];
    return res.status(200).send(item);
  });

}

const responseService = require('../services/response.service');

class BaseRouter {
    constructor(router) {
        this.router = router;

        router.get('/', (req, res )=> {
            const result = responseService.responseOk()
            res.json(result);
        });

        router.post('/', (req, res) => {
            const result = { param: req.params.id };
            res.json(result);
        });

        router.delete('/:id', (req, res) => {
            const result = { param: req.params.id };
            res.json(result);
        });

        router.put('/:id', (req, res) => {
            const result = { param: req.params.id };
            res.json(result);
        });

        router.get('/:id', (req, res) => {
            const result = { param: req.params.id };
            res.json(result);
        });
    }
}

module.exports = BaseRouter;
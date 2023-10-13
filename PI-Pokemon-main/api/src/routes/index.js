const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemonsRouter = require('./pokemonsRoutes');
const typesRoutes = require('./typesRoutes');

const router = Router();

router.use('/types', typesRoutes);
router.use('/pokemons', pokemonsRouter)

module.exports = router;

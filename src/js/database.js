const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'meli',
    host: 'localhost',
    database: 'standings',
    password: 'password',
    port: 5433,
});

const getTeams = (request, response) => {
    pool.query('SELECT * FROM teams ORDER BY points ASC', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows)
    })
}

const getTeamById = () => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM teams WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const updateTeam = (request, response) => {
    const id = parseInt(request.params.id)
    const {team_name, games_played} = request.body

    pool.query(
        'UPDATE teams SET team_name=, '
    )
}

// new team creation will not be used in this case.
const createNewTeam = (request, response) => {
    const { name, email } = request.body
  
    pool.query('INSERT INTO teams (team_name, games_played) VALUES ($1, $2) RETURNING *', [team_name, games_played], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Team added with ID: ${results.rows[0].id}`)
    })
}


/**
 * @Class
 * User entity
 *
 * @since: 2014-03-23
 * @author: Davi Stuart Zilli
 */
var mongoose, Schema, schema;

mongoose = require('mongoose');
Schema   = mongoose.Schema;

/**
 * id - Disciplina: id da disciplina oferecida.
 * idDiscipline - Disciplina Oferecida: Código da disciplina oferecida.
 * year - Ano: ano de oferecimento da disciplinaa
 * period - Período: semestre de oferecimento
 * class - Turma: turma que cursa essa disciplina
 * vacancy - Vagas: número de vagas no oferecimento
 */
schema = new Schema({
    id: { type: String, required: true, trim: true }
    , idDiscipline: { type: String, required: true, trim: true }
    , year: { type: Number, required: true, trim: true }
    , period: { type: Number, required: true, trim: true }
    , class: { type: String, required: true, trim: true }
    , vacancy: { type: Number, required: true, min: 1 }
    , created_at: { type: Date , default: Date.now}
    , updated_at: { type: Date }
});

module.exports = mongoose.model('DisciplineOffering', schema);
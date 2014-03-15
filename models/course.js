/**
 * @Class
 * User entity
 *
 * @since:
 * @author:
 */
var mongoose, Schema, schema;

mongoose = require('mongoose');
Schema   = mongoose.Schema;

/**
 * id - Curso: Código do curso.
 * name - Nome Curso: Nome do curso.
 * level - Nível: Nível do curso (“G” Graduação, “M” Mestrado, etc…)
 * area - Área: Área do Curso (“Exatas”, “Humanas”, “Artes”, etc…)
 * qualification - Habilitação: Habilitacao do curso (“AB”, “AD”)
 * credits - Quantidade de Créditos Integralização: Quantidade necessário de créditos para integralização
 */
schema = new Schema({
    id: { type: String, required: true, trim: true }
  , name: { type: String, required: true, trim: true }
  , level: { type: String, required: true, trim: true }
  , area: { type: String, required: true, trim: true }
  , qualification: { type: String, required: true, trim: true }
  , credits: { type: Number, required: true, min: 1 }
  , created_at: { type: Date , default: Date.now}
  , updated_at: { type: Date }
});

module.exports = mongoose.model('Course', schema);
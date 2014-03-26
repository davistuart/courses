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
 * codigo - Curso: Código do curso.
 * nome - Nome Curso: Nome do curso.
 * nivel - Nível: Nível do curso (“G” Graduação, “M” Mestrado, etc…)
 * area - Área: Área do Curso (“Exatas”, “Humanas”, “Artes”, etc…)
 * habilitacao - Habilitação: Habilitacao do curso (“AB”, “AD”)
 */
schema = new Schema({
    codigo: { type: String, required: true, trim: true },
    nome: { type: String, required: true, trim: true },
    nivel: { type: String, required: true, trim: true },
    area: { type: String, required: true, trim: true },
    habilitacao: { type: String, required: true, trim: true },
    created_at: { type: Date , default: Date.now},
    updated_at: { type: Date }
});

module.exports = mongoose.model('Course', schema);
exports.up = function(knex) {
    return knex.schema
    .createTable('incidents', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        table.string('group_id').notNullable();
        
        table.foreign('group_id').references('id').inTable('group');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};

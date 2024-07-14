/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('open_positions', function(table) {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('location').notNullable();
        table.string('capacity').notNullable();
        table.string('level').notNullable();
        table.string('compensation').notNullable();
        table.text('details').notNullable();
        table.json('experience').notNullable();
        table.json('more').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('open_positions');
};

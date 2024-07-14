/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('team_bios', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('surname').notNullable();
      table.string('role').notNullable();
      table.text('bio').notNullable();
      table.string('image').notNullable();
      table.string('linkedin').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    });
  }
  

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('team_bios');
  };

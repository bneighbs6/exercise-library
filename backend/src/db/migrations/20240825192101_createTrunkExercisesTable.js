/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("trunk_exercises", (table) => {
    table.increments("exercise_id").primary(); 
    table.string("exercise_category").defaultTo("Trunk");
    table.string("exercise_name").notNullable();
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("trunk_exercises");
};

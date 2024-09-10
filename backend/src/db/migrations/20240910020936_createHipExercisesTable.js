/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("hip_exercises", (table) => {
    table.increments("exercise_id").primary(); 
    table.string("exercise_category").defaultTo("Hip")
    table.string("exercise_name").notNullable().unique(); 
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("hip_exercises");
};

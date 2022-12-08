class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :image_url
      t.string :description
      t.string :duration
      t.integer :contractor_id

      t.timestamps
    end
  end
end

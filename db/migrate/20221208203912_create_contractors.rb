class CreateContractors < ActiveRecord::Migration[7.0]
  def change
    create_table :contractors do |t|
      t.string :name
      t.string :password_digest
      t.string :contact
      t.text :overview

      t.timestamps
    end
  end
end

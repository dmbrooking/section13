# frozen_string_literal: true

Section13Schema = GraphQL::Schema.define do
  mutation(Mutation)
  query(Query)
end

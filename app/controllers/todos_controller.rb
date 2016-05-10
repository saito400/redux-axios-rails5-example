class TodosController < ApplicationController
  def index

    @todos = Todo.all
    render json: @todos

  end

  def create
    @todo = Todo.new(todo_attributes)
    @todo.save

  end

private
  def todo_attributes
    params.permit(:text, :completed)
  end

end

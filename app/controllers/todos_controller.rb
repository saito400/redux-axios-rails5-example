class TodosController < ApplicationController
  def index

    @q = Todo.ransack(params[:q])
    @todos = @q.result(distinct: true)
    render json: @todos

  end

  def create
    @todo = Todo.new(todo_attributes)
    @todo.save

  end

  def update
    @todo = Todo.find(params[:id])
    @todo.update(todo_attributes)
  end

private
  def todo_attributes
    params.permit(:text, :completed)
  end

end

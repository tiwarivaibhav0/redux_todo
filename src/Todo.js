import {
  Button,
  Card,
  Checkbox,
  FormLayout,
  Icon,
  List,
  Page,
  TextField,
} from "@shopify/polaris";
import React, { useState } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./maps";
import {
  addTodo,
  deleteTod,
  deleteTodo,
  editTodo,
  transferTodo,
} from "./redux/todo/todoActions";
import { EditMinor } from "@shopify/polaris-icons";
import { DeleteMinor } from "@shopify/polaris-icons";
function Todo(props) {
  console.log(props);
  const [newTask, setNewTask] = useState("");
  const [edit, setEdit] = useState(-1);

  const handleEdit = (val, i) => {
    setNewTask(val);
    setEdit(i);
  };
  return (
    <div className="todo">
      <Page title="Todo">
        <Card sectioned>
          <FormLayout>
            <TextField value={newTask} onChange={(e) => setNewTask(e)} />
            {edit !== -1 ? (
              <Button
                primary
                onClick={() => {
                  if (newTask) {
                    props.dispatch(editTodo(newTask, edit));
                    setEdit(-1);
                  } else alert("Please enter a valid task!!");
                }}
                size="slim"
              >
                Update
              </Button>
            ) : (
              <Button
                primary
                onClick={() => {
                  if (newTask) props.dispatch(addTodo(newTask));
                  else alert("Please enter a valid task!!");
                }}
                size="slim"
              >
                Add
              </Button>
            )}
          </FormLayout>
        </Card>
        <Card sectioned>
          <Page>
            {" "}
            {props.completed.map((it, i) => (
              <Card>
                {" "}
                <div className={it.completed && "line"} id="todo">
                  <div className="taskss">
                    {" "}
                    <label>{it.data}</label>{" "}
                  </div>
                  <div onClick={() => handleEdit(it.data, i)}>
                    <Icon source={EditMinor} color="highlight" />
                  </div>
                  <div onClick={() => props.dispatch(deleteTodo(i))}>
                    <Icon source={DeleteMinor} color="critical" />
                  </div>
                  <div>
                    Completed{" "}
                    <Checkbox
                      checked={it.completed}
                      onChange={() => props.dispatch(transferTodo(i))}
                    ></Checkbox>
                  </div>
                </div>{" "}
              </Card>
            ))}
          </Page>
        </Card>
      </Page>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

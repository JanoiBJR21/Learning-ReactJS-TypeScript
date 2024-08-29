import React, { SyntheticEvent } from "react";
import { Project } from "./Project";

interface ProjectFormProps {
  onSave: (Project: Project) => void;
  onCancel: () => void;
}

function ProjectForm({ onSave, onCancel }: ProjectFormProps) {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSave(new Project({ name: "Update Project" }));
  };

  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name">Project Name</label>
      <input type="text" name="name" placeholder="Enter name" />

      <label htmlFor="description">Project Description</label>
      <textarea name="description" placeholder="Enter description" />

      <label htmlFor="budget">Project Budget</label>
      <input type="number" name="budget" placeholder="Enter budget" />

      <label htmlFor="isActive">Active?</label>
      <input type="checkbox" name="isActive" />

      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button type="button" className="bordered medium" onClick={onCancel}>
          cancel
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;

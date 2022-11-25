import { defineStore } from "pinia";
import { Project } from "../shared/interfaces/Project.interface";

// local Interface
interface ProjectsState {
  projects: Project[];
}

export const useProjectsStore = defineStore("projects", {
  state: () =>
    <ProjectsState>{
      projects: [],
    },
  getters: {
    getProjects(state) {
      return state.projects;
    },
  },
  actions: {
    setProjects(projects: Project[]) {
      this.projects = projects;
    },
    getSingleProject(id: string): Project | undefined {
      return this.projects.find((project) => id === project.id);
    },
  },
});

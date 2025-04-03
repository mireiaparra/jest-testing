import { mapProjectFromApiToVm } from "./project.mapper";

describe("Project Mapper", () => {
  it("should map project from API to VM", () => {
    // Arrange
    const apiProject = {
      id: "1",
      name: "Test Project",
      externalId: "EXT-13",
      comments: "Test comments",
      isActive: true,
      employees: [
        { id: "1", isAssigned: true, employeeName: "Dylan G" },
        { id: "2", isAssigned: false, employeeName: "Mark S" },
      ],
    };

    // Act
    const vmProject = mapProjectFromApiToVm(apiProject);

    // Assert
    expect(vmProject).toEqual({
      ...apiProject,
      employees: apiProject.employees.map((employee) => ({
        ...employee,
      })),
    });
  });

  it("should return empty project when API project is undefined", () => {
    // Arrange
    const apiProject = undefined;

    // Act
    const vmProject = mapProjectFromApiToVm(apiProject);

    // Assert
    expect(vmProject).toEqual({
      id: "",
      name: "",
      externalId: "",
      comments: "",
      isActive: false,
      employees: [],
    });
  });
});

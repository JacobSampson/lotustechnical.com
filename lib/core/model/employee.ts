export default class EmployeeModel {
  static fromPrismic(employee) {
    return {
      name: employee["name"][0]?.text || null,
      title: employee["job-title"][0]?.text || null,
      cellPhoneNumber: employee["cell-phone-number"][0]?.text || null,
      officePhoneNumber: employee["office-phone-number"][0]?.text || null,
      email: employee["email"][0]?.text || null,
      linkedInUrl: employee["linkedin-url"]?.url || null,
      imageUrl: employee["image-url"]?.url || null,
    };
  }
}

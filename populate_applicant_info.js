(params) => {
  /**
   * We are working on improving the SQL join syntax to handle the case of nested arrays.
   * Luckily you can work this limitation in Javascript.
   */
  var interviewers = {};
  api.run('airtable.get_records', {baseId: params.baseId, table: 'Interviewers'}).forEach((i) => {
    interviewers[i.id] = i;
  });

  var positions = {};
  api.run('airtable.get_records', {baseId: params.baseId, table: 'Positions'}).forEach((p) => {
    positions[p.id] = p;
  });
          

  return api.run('this.get_interviewer_applicants', {
    email: api.user().email,
    baseId: params.baseId
  }).map((a) => {
    a['Onsite Interviewer'] = a['Onsite Interviewer'].map((i) => {
      return {name: interviewers[i].fields.Name, email: interviewers[i].fields.Email, id: interviewers[i].id}
    });

    a['Applying for'] = a['Applying for'].map((i) => {
      return {name: positions[i].fields.Name}
    });

    return {
      name: a.Name,
      notes: a['Onsite Interview Notes'],
      stage: a.Stage,
      interviewers: a['Onsite Interviewer'],
      position: a['Applying for']
    };
  });
}

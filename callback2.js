let order = (call_production_team) =>
{
    console.log(' order placed ,please call  production');
    call_production_team(production);
};

let production = () =>
{
    console.log('order received, starting production');
};
order(production);
# react-dccs-starter-kit

## Lecture 5:

Decisions

1. css class names should be camelCase
2. import ordering
   - external libs
   - internal modules
   - css
3. code documentation

   - all classess that are exported should be documented
   - all public methods should be documented

4. FIXME: Should we make some DesignDecisions regarding naming (Some suffixes would be nice...e.g. Component, Service, Store,...whatever)

- react components have suffix Component
- similar for services, stores

5. FIXME: Should we use Component if we're not using any method from lifecycle ?

- YES.

6. {/_ FIXME: Should we think to collect translations at least into single file... _/}
7. /\*
   FIXME: Should we transform it into following according to our discussion or? :
   class EquipmentServiceType {}
   const equipmentService = new EquipmentServiceType();
   export default equipmentService;

\*/

8. // FIXME: Should we have central place for managing history actions ?

- yes. we will have one file.

9. // FIXME: ~100 lines needed only for JSX stuff... hmmm let's discuss
10. // FIXME: This method is deprecated...let's discuss how to solve it in different way...

{/_ FIXME: route paths are bad.... Maybe we should think about them (e.g. manage->`/inventory/:id`, overview->`inventory`)_/}

- slažem se.

        {/* FIXME: How do we know which item is active ? Anyway it would be nice if We have following configuration of menu:
        <div className="header">
          <MenuItem content='Manage' to= '/manage' />
          <MenuItem content='Overview' to= '/overview' />
          ...in the future...maybe submenus appear...
          <MenuItem>
            <MenuItem content='Example1' to= '/example1' />
            <MenuItem content='Example2' to= '/example2' />
            <MenuItem content='Example3' to= '/example3' />
          </MenuItem
        </div>

        mislim da se ne slažem. mrsko mi praviti
        eventualno možemo da izbacimo NavLink skroz i zamjenimo ga sa <a>

        zamjeni tabelu u formi

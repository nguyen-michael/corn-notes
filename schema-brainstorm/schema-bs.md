## Schema brainstorming.
The Schema as proposed provides open access to higher privileged users (teachers et al) while providing access to all neccessary information as a less priveleged user (Students et al).

We'll use MongoDB for it's flexibility and conciseness. 

The structure also allow for easy data flow. This will be helpful if we decide to implement extensive ReactJS capabilities. 

### Data Flow proposal.

- *Student* and *Teacher* both extend a possible *User* class.
- A *Teacher* may have many *Classes* or many *Students*.
- A *Student* may have many *Note Pages*.
- *Note Pages* may have many *Questions*
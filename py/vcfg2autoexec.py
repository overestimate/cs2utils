# cs2utils (c) 2023- overestimate. LGPL-3.0-only, see github.com/overestimate/cs2utils for source + full license
import os
import json

def find_profile():
    # attempt one-profile path finding
    paths = os.listdir("C:\\Program Files (x86)\\Steam\\userdata")
    if len(paths) == 1:
        print("automatically found your userdata path.")
        return paths[0]


    # attempt logged-in profile finding
    print("NOTICE: there are multiple users on your machine, this tool needs minor intervention.")
    input("log in as your user on steam, make sure you can see your library, and press enter to proceed")
    with open('C:\\Program Files (x86)\\Steam\\logs\\connection_log.txt', 'r') as f:
        log_lines = f.readlines()
        for line in reversed(log_lines):
            if "[Connected, 4, 3]" in line and "Logging on" in line:
                # [1970-01-01 00:00:00] [Connected, 4, 3] [U:1:ACCOUNTID] Logging on [U:1:ACCOUNTID]
                return line.split("Logging on [")[1][4:-2]
# convert cs2_user_keys_0_slot0.vcfg to source .cfg 
def binds_to_cfg(bind_text: str) -> str:
    binding_json = "{" + bind_text.replace("	", "").replace("\"\"", "\": \"").replace("\n{", ": {").replace("\n\"", ",\n\"").replace("{,", "{") + "}"
    bindings_group = json.loads(binding_json)["config"]
    digital_binds = bindings_group["bindings"]
    analog_binds = bindings_group["analogbindings"]
    cfg = ""
    for k,v in digital_binds.items():
        if v == "<unbound>":
            cfg += f'bind "{k}" ""\n'
            continue
        cfg += f'bind "{k}" "{v}"\n'
    for k,v in analog_binds.items():
        if v == "<unbound>":
            cfg += f'bind "{k}" ""\n'
            continue
        cfg += f'bind "{k}" "{v}"\n'
    
    return cfg
def convars_to_cfg(cvar_text: str) -> str:
    cvar_json = "{" + cvar_text.replace("	", "").replace("\"\"", "\": \"").replace("\n{", ": {").replace("\n\"", ",\n\"").replace("{,", "{") + "}"
    cvars = json.loads(cvar_json)["config"]["convars"]
    cfg = ""
    for k,v in cvars.items():
        cfg += f'"{k}" "{v}"\n'
    return cfg


def _cli_convert():
    cfg_prefix = f'C:\\Program Files (x86)\\Steam\\userdata\\{find_profile()}\\730\\local\\cfg\\'
    cfg = ""
    with open(f"{cfg_prefix}cs2_user_keys_0_slot0.vcfg", 'r') as f:
        cfg += binds_to_cfg(f.read())
    with open(f"{cfg_prefix}cs2_user_convars_0_slot0.vcfg", 'r') as f:
        cfg += convars_to_cfg(f.read())
    print(cfg)

if __name__ == "__main__":
    _cli_convert()
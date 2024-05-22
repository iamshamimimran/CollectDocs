# CollectDocs

This project is a documentation generator for the Collectd project.
It takes a set of Collectd configuration files and generates a set of markdown files that can be used to create a documentation website.

## Usage

To use the generator, simply run the following command:

```
collectdocs generate
```

This will generate a set of markdown files in the `docs/` directory.

## Configuration

The generator can be configured using a YAML file. The following options are available:

* `collectd_conf_dir`: The directory containing the Collectd configuration files.
* `collectd_conf_files`: A list of Collectd configuration files to process.
* `markdown_dir`: The directory to store the generated markdown files.
* `markdown_file_prefix`: The prefix to use for the generated markdown files.
* `markdown_file_suffix`: The suffix to use for the generated markdown files.

## Example

The following is an example of a YAML configuration file:

```
collectd_conf_dir: /etc/collectd
collectd_conf_files:
  - collectd.conf
  - collectd.conf.d/*.conf
markdown_dir: docs
markdown_file_prefix: collectd-
markdown_file_suffix: .md
```

This configuration will generate a set of markdown files in the `docs/` directory, with the prefix `collectd-` and the suffix `.md`. The markdown files will be generated from the Collectd configuration files in the `/etc/collectd` directory.

## Contributing

Contributions are welcome! Please see the [contributing guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the Apache License, Version 2.0. See the [LICENSE](LICENSE) file for more information.

module ViewHelpers

  # yaml data
  def data
    d||=YAML.load_file(File.join(File.dirname(__FILE__), 'data.yml'))
    return d
  end

  # talk
  def talk_data
    d||=YAML.load_file(File.join(File.dirname(__FILE__), 'talk_data.yml'))
    return d
  end

  # nav li active link
  def nav_link_to(name, href, options={})
    if href == request.path.gsub(/[^\/]+$/, '')
       active = "active"
    end
    content_tag(:li, link_to(name, href, options), :class => active )
  end

end
